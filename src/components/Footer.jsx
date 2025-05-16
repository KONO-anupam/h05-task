import React from 'react';
import Image from 'next/image';

// Component for each column of footer links
const LinkColumn = ({ title, items }) => (
  <div className="flex flex-col space-y-3 mb-8 md:mb-0 md:justify-between">
    <h2 className="text-black font-normal font-satoshi text-base leading-[18px] tracking-[3px] uppercase">
      {title}
    </h2>
    {items.map((text, idx) => (
      <p
        key={`${title}-${idx}`}
        className="text-black/60 font-normal font-satoshi text-base leading-[19px]"
      >
        {text}
      </p>
    ))}
  </div>
);

// Component to display payment badge image
const PaymentIcon = ({ index }) => (
  <Image
    src={`/Badge${index ? `-${index}` : ''}.svg`}
    width={50}
    height={50}
    alt={`payment badge ${index || 1}`}
    className="h-8 w-auto md:h-10"
  />
);

const Footer = () => {
  const columns = [
    {
      title: 'Company',
      items: ['About', 'Features', 'Works', 'Career'],
    },
    {
      title: 'Help',
      items: [
        'Customer support',
        'Terms & Conditions',
        'Delivery Details',
        'Privacy and Policy',
      ],
    },
    {
      title: 'FAQ',
      items: ['Accounts', 'Manage Deliveries', 'Orders', 'Payments'],
    },
    {
      title: 'Resources',
      items: [
        'Free ebooks',
        'Development tutorial',
        'How to blog',
        'Youtube playlist',
      ],
    },
  ];

  const badgeIndexes = ['', '2', '3', '4', '5'];

  return (
    <div className="w-full bg-[#F0F0F0] min-h-[400px] px-6 sm:px-8 md:px-12 lg:px-24 mt-auto pt-16 md:pt-[140px]">
      <footer className="w-full flex flex-col md:flex-row md:justify-between gap-8 md:gap-[50px] lg:gap-[100px]">
        {/* Brand and Description */}
        <div className="flex flex-col gap-5 max-w-xs mb-10 md:mb-0">
          <h1 className="text-black font-integral text-2xl md:text-3xl font-bold">
            Shop.co
          </h1>
          <p className="text-sm md:text-base font-satoshi">
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>
          <Image
            src="/social.svg"
            alt="social"
            width={120}
            height={120}
            className="h-8 md:h-10"
          />
        </div>

        {/* Footer Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8 md:flex md:flex-row md:justify-between md:flex-1">
          {columns.map(({ title, items }) => (
            <LinkColumn key={title} title={title} items={items} />
          ))}
        </div>
      </footer>

      {/* Divider */}
      <div className="w-full bg-black/10 h-0.5 my-6 md:my-10" />

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between py-4">
        <p className="text-black/60 font-satoshi text-center sm:text-left text-xs sm:text-sm font-normal leading-none mb-4 sm:mb-0">
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        <div className="flex space-x-2 md:space-x-3">
          {badgeIndexes.map((id, i) => (
            <PaymentIcon key={i} index={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

