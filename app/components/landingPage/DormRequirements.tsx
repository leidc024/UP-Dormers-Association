// components/ParentRequirements.tsx
import React from "react";

const DormRequirements = () => {
  return (
    <div className="space-y-4 text-sm">
      <p className="italic font-semibold">
        Applicants are required to submit requirements for their application to
        be considered.
      </p>

      <p>Documents to be submitted depending on employment status of parents:</p>

      <table className="w-full border border-collapse text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1 text-left">Status</th>
            <th className="border px-2 py-1 text-left">Forms to Submit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">1 BOTH parents are working</td>
            <td className="border px-2 py-1">
              2025 Income Tax return of BOTH parents if filing separately; OR
              certificate of employment of BOTH parents with income
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">
              2 BOTH parents are engaged in a business, or ONE is handling a
              business while the other is not employed
            </td>
            <td className="border px-2 py-1">
              2025 Income Tax return of business and/or affidavit of no work for
              the other parent
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">3 BOTH parents are self-employed</td>
            <td className="border px-2 py-1">
              2025 Income Tax return of BOTH parents OR affidavit of
              self-employment of BOTH parents with amount of income stated
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">
              4 ONE parent is working, while the OTHER IS NOT
            </td>
            <td className="border px-2 py-1">
              2025 ITR OR certification of employment of the parent working with
              stated income AND affidavit of no work for the other parent OR
              Certificate of Tax Exemption from BIR
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">5 SINGLE-PARENT</td>
            <td className="border px-2 py-1">
              2025 ITR of parent AND affidavit or single parent ID
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">6 BOTH parents are working ABROAD</td>
            <td className="border px-2 py-1">
              Certificate of work with income OR copy of the contract, should be
              issued within the last six months
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">7 RECEIVING SUPPORT FROM FAMILY MEMBER</td>
            <td className="border px-2 py-1">
              2025 ITR of family member giving support OR certification of
              employment with stated income
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">
              8 RECEIVING SUPPORT FROM A FAMILY MEMBER WHO IS RETIRED ALREADY
            </td>
            <td className="border px-2 py-1">
              Affidavit stating previous job AND amount of pension being received
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">9 BOTH parents are RETIRED</td>
            <td className="border px-2 py-1">
              Affidavit stating job before retirement AND amount of monthly
              pension OR copy of pension certificate with amount
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">12 SELF-SUPPORTING</td>
            <td className="border px-2 py-1">
              Affidavit of self-support, include sources of income to finance
              education
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">
              13 BOTH parents are WORKING and DOES NOT HAVE ITR OR ANY PROOF OF
              INCOME
            </td>
            <td className="border px-2 py-1">
              Affidavit stating sources of income to support the education of
              child OR Certificate of Tax Exemption form BIR
            </td>
          </tr>
        </tbody>
      </table>

      <p className="text-xs mt-2">
        <span className="font-semibold">*ITR or Income Tax Return</span> – should
        be year 2025 and stamped received by the Bureau of Internal Revenue on
        2026; <span className="font-bold underline">
          ITR of previous years will not be accepted.
        </span>
      </p>

      <p className="text-xs mt-1">
        <span className="font-semibold">**Affidavit</span> is a written document
        prepared and signed by a lawyer.
      </p>
    </div>
  );
};

export default DormRequirements;
