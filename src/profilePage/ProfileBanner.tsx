import React, { useEffect, useState } from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { getProfileBanner } from '../queries/getProfileBanner';
import { ProfileBanner as ProfileBannerType } from '../types';

const ProfileBanner: React.FC = () => {
  const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  // Add event listener for window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await getProfileBanner();
      setBannerData(data);
    }
    fetchData();
  }, []);

  if (!bannerData) return <div>Loading...</div>;

  const handlePlayClick = () => {
    window.open(bannerData.resumelink.url, '_blank');
  };

  const handleLinkedinClick = () => { 
    window.open(bannerData.linkedinlink, '_blank');
  }

  // Generate a fallback mobile summary if the dedicated one isn't provided
  const generatedMobileSummary = bannerData.profilesummary
    ? bannerData.profilesummary.split(' ').slice(0, 25).join(' ') + '...'
    : '';

  // Use the dedicated mobile summary if available, otherwise use the generated one
  const displayMobileSummary = bannerData.mobilesummary || generatedMobileSummary;

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{bannerData.headline}</h1>
        <p className="banner-description">
          {isMobile ? displayMobileSummary : bannerData.profilesummary}
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
