import LoginCard from '@/components/loginPage/loginCard'
import React from 'react'
import Footer from '@/components/footer'

const LoginPage = () => {
  return (
    <div className=" ">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center mt-12 mb-10 flex-grow">
        <LoginCard />
      </div>
      
      {/* Footer Stays at Bottom */}
      <Footer />
    </div>
  );
};

export default LoginPage;
