import React from 'react';
import { ReturnPolicyHeader, ReturnPolicyContent, ReturnPolicyCases, ReturnPolicyFooter, DataCollectionSection, PurposeSection, DataSharingSection, UserRightsSection,
    TermsSection, AgeRequirement, ProductsSection, PaymentsSection, IntellectualProperty, LiabilitySection, CookiesSection
 } from '../components/ReturnPolicyComponents';

const ReturnPolicy = () => {
  return (
    <div className="container bg-gray-50 p-6 md:p-10 rounded-lg shadow-sm max-w-4xl mx-auto my-8">
        <div className="space-y-8">
            <ReturnPolicyHeader />
            <ReturnPolicyContent />
            <ReturnPolicyCases />
            <ReturnPolicyFooter />
        </div>
        <div className="space-y-8">
            <DataCollectionSection />
            <PurposeSection />
            <DataSharingSection />
            <UserRightsSection />
          <TermsSection />
          <AgeRequirement />
          <ProductsSection />
          <PaymentsSection />
          <IntellectualProperty />
          <LiabilitySection />
          <CookiesSection />
        </div>
    </div>
  );
};

export default ReturnPolicy;