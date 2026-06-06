import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingLabelInput from '../components/FloatingLabelInput';
import RadioButton from '../components/RadioButton';
import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import { register } from '../store/userSlice';
import type { AppDispatch } from '../store';

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: 'yes'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(register({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      company: formData.company,
      agency: formData.agency
    }));
    navigate('/profile');
  };

  return (
    <div className="flex flex-col px-6 pt-8 h-full bg-[#ECECEC] overflow-y-auto">
      <div className="mb-5">
        <h1 className="text-[26px] font-bold text-[#1D2226] mb-1 leading-tight">
          Create your<br />PopX account
        </h1>
      </div>
      
      <form onSubmit={handleSignup} className="flex flex-col flex-1">
        <div className="flex-1">
          <FloatingLabelInput
            label="Full Name"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(val) => handleInputChange('fullName', val)}
            required
          />
          
          <FloatingLabelInput
            label="Phone number"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(val) => handleInputChange('phone', val)}
            required
          />
          
          <FloatingLabelInput
            label="Email address"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(val) => handleInputChange('email', val)}
            required
          />
          
          <FloatingLabelInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(val) => handleInputChange('password', val)}
            required
          />

          <FloatingLabelInput
            label="Company name"
            placeholder="Enter your company name"
            value={formData.company}
            onChange={(val) => handleInputChange('company', val)}
          />

          <div className="mt-2 mb-5">
            <p className="text-sm font-medium text-[#1D2226] mb-3">Are you an Agency?<span className="text-error ml-0.5">*</span></p>
            <div className="flex gap-5">
              <RadioButton
                label="Yes"
                name="agency"
                value="yes"
                checked={formData.agency === 'yes'}
                onChange={(val) => handleInputChange('agency', val)}
              />
              <RadioButton
                label="No"
                name="agency"
                value="no"
                checked={formData.agency === 'no'}
                onChange={(val) => handleInputChange('agency', val)}
              />
            </div>
          </div>
        </div>

        <div className="pb-6">
          <Button type="submit" variant="primary">
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;

