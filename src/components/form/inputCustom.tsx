import React, { ReactNode } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Assurez-vous que ces composants existent dans votre projet
import { Label } from "@/components/ui/label"; // Assurez-vous que ce composant existe dans votre projet
import { Input } from "@/components/ui/input"; // Composant Input de Shadcn UI

interface Option {
  value: string;
  label: string;
}

type InputType = "text" | "select" | "date";

// Utilisation de Omit pour exclure onChange et d'autres propriétés si nécessaire
interface InputCustomProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "type" | "value"
  > {
  type: InputType;
  label?: string;
  name: string;
  options?: Option[]; // Nécessaire pour le type "select"
  leftImage?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  customTrigger?: ReactNode;
  error?: string;
}

const InputCustom: React.FC<InputCustomProps> = ({
  type,
  label,
  name,
  options = [],
  leftImage,
  placeholder = "",
  value,
  onChange,
  className = "",
  customTrigger,
  error,
  ...rest
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && <Label htmlFor={name}>{label}</Label>}
      {type === "select" ? (
        <div className="relative flex items-center">
          <Select value={value} onValueChange={onChange}>
            {customTrigger ? (
              <SelectTrigger className="w-full">{customTrigger}</SelectTrigger>
            ) : (
              <SelectTrigger
                id={name}
                className={`w-full ${leftImage ? "pl-10" : ""}`}
              >
                {leftImage && (
                  <Image
                    src={leftImage}
                    alt="Left icon"
                    width={20}
                    height={20}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2"
                  />
                )}
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            )}
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ) : type === "date" ? (
        <div className="relative flex items-center">
          <Input
            type="date"
            id={name}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={`w-full ${leftImage ? "pl-10" : ""}`}
            {...rest}
          />
          {leftImage && (
            <Image
              src={leftImage}
              alt="Left icon"
              width={20}
              height={20}
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
            />
          )}
        </div>
      ) : (
        <div className="relative flex items-center">
          <Input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={`w-full ${leftImage ? "pl-10" : ""}`}
            {...rest}
          />
          {leftImage && (
            <Image
              src={leftImage}
              alt="Left icon"
              width={20}
              height={20}
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
            />
          )}
        </div>
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputCustom;
