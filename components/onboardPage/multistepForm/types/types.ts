export type FormData = {
    // Step 1 - Contact Information
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    country: string;
    zipCode: string;
    phoneNumber: string;
    photo?: File;
  
    // Step 2 - Job Title
    jobTitle: string;
  
    // Step 3 - Experience
    experiences: {
      company: string;
      position: string;
      startDate: string;
      endDate: string;
      description: string;
    }[];
    noExperience: boolean;
  
    // Step 4 - Education
    education: {
      institution: string;
      degree: string;
      field: string;
      graduationYear: string;
    }[];
  
    // Step 5 - Languages
    languages: {
      language: string;
      proficiency: 'Basic' | 'Intermediate' | 'Advanced' | 'Native';
    }[];
  
    // Step 6 - Skills
    skills: string[];
  
    // Step 7 - Profile Description
    profileDescription: string;
  
    // Step 8 - Hourly Rate
    hourlyRate: number;
  }
  
  export type StepProps = {
    data: FormData;
    updateFields: (fields: Partial<FormData>) => void;
  }
  