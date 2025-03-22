import React, { useEffect, useState } from 'react';
import './WorkPermit.css';
import { getWorkPermit } from '../queries/getWorkPermit';
import { WorkPermit as IWorkPermit } from '../types';
const WorkPermit: React.FC = () => {

  const [workPermitData, setWorkPermitData] = useState<IWorkPermit | null>(null);
  useEffect(() => {
    async function fetchWorkPermitData() {
      const data = await getWorkPermit();
      setWorkPermitData(data);
    }
    fetchWorkPermitData();
  }, []);

  if (!workPermitData) return <div>Loading...</div>;

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎓 Work Permit</h2>
        <p className="work-permit-summary">
          Currently on a <strong>{workPermitData.visastatus}</strong> 🛂, Anticipate being available for full-time employment from <strong>{new Date(workPermitData.expirydate).toLocaleDateString()}</strong> 📅,  This visa pathway ensures I'm fully authorized for UK employment opportunities to build valuable professional experience.
        </p>
        <p className="additional-info">{workPermitData.additionalinfo}</p>
      </div>
    </div>
  );
};

export default WorkPermit;
