import React from 'react';

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <label className="flex items-center relative pl-7 mr-5 cursor-pointer text-sm text-text select-none group">
      <span>{label}</span>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="absolute opacity-0 cursor-pointer"
      />
      <span className={`absolute top-0 left-0 h-5 w-5 bg-white border-2 border-border rounded-full transition-all group-hover:border-primary
        ${checked ? 'border-primary' : ''}
      `} style={{ width: '20px', height: '20px' }}>
        {checked && (
          <span className="absolute top-1 left-1 w-2 h-2 rounded-full bg-primary" />
        )}
      </span>
    </label>
  );
};

export default RadioButton;
