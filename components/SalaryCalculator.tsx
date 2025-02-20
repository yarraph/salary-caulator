"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

const SalaryCalculator = () => {
  const [profession, setProfession] = useState('nurse');
  const [country, setCountry] = useState('uae');

  const salaryData = {
    nurse: {
      uae: { min: 2500, max: 4500, currency: 'AED', multiplier: 3.67, demand: 'High' },
      saudi: { min: 2700, max: 4800, currency: 'SAR', multiplier: 3.75, demand: 'High' },
      singapore: { min: 2800, max: 4800, currency: 'SGD', multiplier: 1.34, demand: 'High' },
      canada: { min: 3500, max: 6500, currency: 'CAD', multiplier: 1.35, demand: 'Very High' },
      australia: { min: 4000, max: 7000, currency: 'AUD', multiplier: 1.52, demand: 'High' },
      uk: { min: 2800, max: 4500, currency: 'GBP', multiplier: 0.79, demand: 'High' },
      japan: { min: 2500, max: 4000, currency: 'JPY', multiplier: 151.5, demand: 'Medium' }
    },
    engineer: {
      uae: { min: 3000, max: 8000, currency: 'AED', multiplier: 3.67, demand: 'High' },
      saudi: { min: 3200, max: 8500, currency: 'SAR', multiplier: 3.75, demand: 'Very High' },
      singapore: { min: 4000, max: 9000, currency: 'SGD', multiplier: 1.34, demand: 'Very High' },
      canada: { min: 4500, max: 10000, currency: 'CAD', multiplier: 1.35, demand: 'High' },
      australia: { min: 5000, max: 11000, currency: 'AUD', multiplier: 1.52, demand: 'High' },
      uk: { min: 3500, max: 8000, currency: 'GBP', multiplier: 0.79, demand: 'High' },
      japan: { min: 3500, max: 7000, currency: 'JPY', multiplier: 151.5, demand: 'High' }
    },
    hospitality: {
      uae: { min: 1800, max: 3500, currency: 'AED', multiplier: 3.67, demand: 'High' },
      saudi: { min: 1900, max: 3700, currency: 'SAR', multiplier: 3.75, demand: 'High' },
      singapore: { min: 2000, max: 3800, currency: 'SGD', multiplier: 1.34, demand: 'Medium' },
      canada: { min: 2500, max: 4000, currency: 'CAD', multiplier: 1.35, demand: 'High' },
      australia: { min: 3000, max: 4500, currency: 'AUD', multiplier: 1.52, demand: 'High' },
      uk: { min: 2000, max: 3500, currency: 'GBP', multiplier: 0.79, demand: 'Medium' },
      japan: { min: 2200, max: 3800, currency: 'JPY', multiplier: 151.5, demand: 'Medium' }
    },
    teacher: {
      uae: { min: 2500, max: 4500, currency: 'AED', multiplier: 3.67, demand: 'High' },
      saudi: { min: 2600, max: 4700, currency: 'SAR', multiplier: 3.75, demand: 'High' },
      singapore: { min: 2800, max: 4800, currency: 'SGD', multiplier: 1.34, demand: 'Medium' },
      canada: { min: 3000, max: 5500, currency: 'CAD', multiplier: 1.35, demand: 'Medium' },
      australia: { min: 3500, max: 6000, currency: 'AUD', multiplier: 1.52, demand: 'High' },
      uk: { min: 2500, max: 4500, currency: 'GBP', multiplier: 0.79, demand: 'Medium' },
      japan: { min: 2500, max: 4500, currency: 'JPY', multiplier: 151.5, demand: 'High' }
    },
    construction: {
      uae: { min: 2000, max: 4000, currency: 'AED', multiplier: 3.67, demand: 'High' },
      saudi: { min: 2100, max: 4200, currency: 'SAR', multiplier: 3.75, demand: 'Very High' },
      singapore: { min: 2200, max: 4200, currency: 'SGD', multiplier: 1.34, demand: 'High' },
      canada: { min: 2800, max: 5000, currency: 'CAD', multiplier: 1.35, demand: 'High' },
      australia: { min: 3200, max: 5500, currency: 'AUD', multiplier: 1.52, demand: 'Very High' },
      uk: { min: 2300, max: 4200, currency: 'GBP', multiplier: 0.79, demand: 'High' },
      japan: { min: 2400, max: 4300, currency: 'JPY', multiplier: 151.5, demand: 'High' }
    },
    domestic: {
      uae: { min: 400, max: 2200, currency: 'AED', multiplier: 3.67, demand: 'Very High' },
      saudi: { min: 400, max: 2100, currency: 'SAR', multiplier: 3.75, demand: 'Very High' },
      singapore: { min: 400, max: 2400, currency: 'SGD', multiplier: 1.34, demand: 'High' },
      canada: { min: 400, max: 2800, currency: 'CAD', multiplier: 1.35, demand: 'Medium' },
      australia: { min: 400, max: 3000, currency: 'AUD', multiplier: 1.52, demand: 'Medium' },
      uk: { min: 400, max: 2500, currency: 'GBP', multiplier: 0.79, demand: 'Medium' },
      japan: { min: 400, max: 2400, currency: 'JPY', multiplier: 151.5, demand: 'High' }
    },
    caregiver: {
      uae: { min: 1800, max: 2800, currency: 'AED', multiplier: 3.67, demand: 'High' },
      saudi: { min: 1700, max: 2700, currency: 'SAR', multiplier: 3.75, demand: 'High' },
      singapore: { min: 1900, max: 3000, currency: 'SGD', multiplier: 1.34, demand: 'Very High' },
      canada: { min: 2500, max: 3800, currency: 'CAD', multiplier: 1.35, demand: 'Very High' },
      australia: { min: 2800, max: 4200, currency: 'AUD', multiplier: 1.52, demand: 'High' },
      uk: { min: 2200, max: 3500, currency: 'GBP', multiplier: 0.79, demand: 'High' },
      japan: { min: 2000, max: 3200, currency: 'JPY', multiplier: 151.5, demand: 'Very High' }
    }
  };

  const selectedSalary = salaryData[profession][country];
  
  // Calculate currency conversions
  const localCurrency = Math.round(selectedSalary.min * selectedSalary.multiplier);
  const localCurrencyMax = Math.round(selectedSalary.max * selectedSalary.multiplier);
  const phpMin = Math.round(selectedSalary.min * 56);
  const phpMax = Math.round(selectedSalary.max * 56);

  return (
    <Card className="w-full max-w-2xl mx-auto my-8 bg-white shadow-lg">
      <CardHeader className="bg-gray-50 border-b">
        <CardTitle className="flex items-center gap-2 text-xl font-semibold">
          <Calculator className="w-5 h-5" />
          Overseas Salary Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Select Your Profession:</label>
            <select
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className="w-full p-2 border rounded-md bg-white"
            >
              <option value="nurse">Healthcare Professional/Nurse</option>
              <option value="engineer">Engineer/IT Professional</option>
              <option value="hospitality">Hospitality/Service Industry</option>
              <option value="teacher">Teacher/Education Professional</option>
              <option value="construction">Construction/Skilled Trade</option>
              <option value="domestic">Domestic Helper</option>
              <option value="caregiver">Caregiver/Home Health Aid</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Select Destination Country:</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full p-2 border rounded-md bg-white"
            >
              <option value="uae">United Arab Emirates</option>
              <option value="saudi">Saudi Arabia</option>
              <option value="singapore">Singapore</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
              <option value="uk">United Kingdom</option>
              <option value="japan">Japan</option>
            </select>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Expected Monthly Salary Range</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">In USD:</span>
              <span className="font-medium">${selectedSalary.min.toLocaleString()} - ${selectedSalary.max.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">In {selectedSalary.currency}:</span>
              <span className="font-medium">{localCurrency.toLocaleString()} - {localCurrencyMax.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">In PHP:</span>
              <span className="font-medium">₱{phpMin.toLocaleString()} - ₱{phpMax.toLocaleString()}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Market Demand:</span>
              <span className="font-medium">{selectedSalary.demand}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          <p>Note: These figures are approximations based on market data and may vary based on specific employers, locations, and economic conditions.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalaryCalculator;
