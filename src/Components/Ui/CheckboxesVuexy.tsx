import React from 'react';

interface CheckBoxesVuexyProps {
  className?: string;
  color: string;
  defaultChecked?: boolean;
  checked?: boolean;
  value?: string;
  disabled?: boolean;
  onClick?: () => void;
  onChange?: () => void;
  size?: string;
  icon: React.ReactNode;
  label: string;
}

const CheckBoxesVuexy: React.FC<CheckBoxesVuexyProps> = ({
  className = '',
  color,
  defaultChecked,
  checked,
  value,
  disabled,
  onClick,
  onChange,
  size = 'md',
  icon,
  label,
}) => {
  return (
    <div className={`vx-checkbox-con ${className} vx-checkbox-${color}`}>
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        checked={checked}
        value={value}
        disabled={disabled}
        onClick={onClick}
        onChange={onChange}
      />
      <span className={`vx-checkbox vx-checkbox-${size}`}>
        <span className="vx-checkbox--check">{icon}</span>
      </span>
      <span>{label}</span>
    </div>
  );
};

export default CheckBoxesVuexy;
