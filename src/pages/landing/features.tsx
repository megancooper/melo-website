import React from 'react';
import {HandIndexThumbFill, FileEarmarkMusicFill, Stars} from 'react-bootstrap-icons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({icon, title, description}: FeatureCardProps) => (
  <div className="md:max-w-sm lg:max-w-xs xl:max-w-sm mt-8 pl-8 pr-8 font-inconsolata">
    <div className="inline-flex items-center mb-4">
      {icon}
      <div className="ml-4 font-bold">{title}</div>
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
    icon: <Stars size={36} fill="#6386F8" className="bg-primary-light-2 p-2 rounded" />,
    title: 'Custom Themes',
    description: 'Want a custom experience? Toggle between Melo\'s light and dark themes.',
  },
];

const Features: React.FC = () => (
  <div className="container mx-auto mt-20 mb-20 flex justify-center">
    <div>
      <div className="flex flex-wrap">
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
