import React from 'react';
import {HandIndexThumbFill, FileEarmarkMusicFill, Laptop} from 'react-bootstrap-icons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({icon, title, description}: FeatureCardProps) => (
  <div className="w-full bg-gray-50 hover:bg-white lg:mr-4 last:mr-0 lg:max-w-xs xl:max-w-sm mt-8 p-8 font-inconsolata rounded-md border-2 border-gray-300 hover:shadow-md transition duration-150 ease-in-out transform hover:-translate-y-5">
    <div className="inline-flex items-center mb-4">
      {icon}
      <div className="ml-4 font-bold text-lg">{title}</div>
    </div>
    <div>
      {description}
    </div>
  </div>
);

const HIGHLIGHTED_FEATURES = [
  {
    icon: <HandIndexThumbFill size={36} fill="#6386F8" className="bg-primary-light-2 p-2 rounded" />,
    title: 'User-friendly Interface',
    description: 'Tired of not having an intuitive way to manage your local audio files? With Melo you can organize your files with a modern interface.',
  },
  {
    icon: <FileEarmarkMusicFill size={36} fill="#6386F8" className="bg-primary-light-2 p-2 rounded" />,
    title: 'Music Management Features',
    description: 'Craving features only available with streaming apps? Group your locals files by curating playlists within Melo.',
  },
  {
    icon: <Laptop size={36} fill="#6386F8" className="bg-primary-light-2 p-2 rounded" />,
    title: 'Multi-platform Support',
    description: 'Melo is available on all major platforms, including Windows, MacOS, and Linux.',
  },
];

const Features: React.FC = () => (
  <div className="bg-primary-light-2">
    <div className="container px-6 py-2 lg:pb-0 lg:mt-20 mb-20 mx-auto flex justify-center lg:w-full">
      <div className="flex flex-col lg:flex-row justify-between">
        {HIGHLIGHTED_FEATURES.map(
          ({icon, title, description}, index) => (
            <FeatureCard
              key={`highlighted_feature_${index}`}
              icon={icon}
              title={title}
              description={description}
            />
          ),
        )}
      </div>
    </div>
  </div>
);

export default Features;
