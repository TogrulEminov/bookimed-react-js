import { useEffect, useState } from 'react';
import FilterAreas from '../Section/Lead/FilterAreas';
import FilterTable from '../Section/Lead/FilterTable';
import data from '../resources/partnerslead.json';

const Lead = () => {
  const [language, setLanguage] = useState('');
  const [prefered, setPrefered] = useState([]);
  const [nationalits, setNationalits] = useState([]);
  const [depart, setDepart] = useState([]);
  const [ill, setIll] = useState([]);
  const [treat, settreat] = useState([]);
  const [diaqnos, setDiaqnos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filterData = () => {
      try {
        setLoading(true);
        setTimeout(() => {
          const filteredData = data.filter((item) => {
            const languageFilter = !language || item.language === language;
            const preferedFilter =
              prefered.length === 0 || prefered.includes(item.country);
            const departFilter =
              depart.length === 0 || depart.includes(item.departments);
            const illFilter = ill.length === 0 || ill.includes(item.ill);
            const treatFilter =
              treat.length === 0 || treat.includes(item.treat);
            const diaqnosFilter =
              diaqnos.length === 0 || diaqnos.includes(item.diognostic);
            return (
              languageFilter &&
              preferedFilter &&
              departFilter &&
              illFilter &&
              treatFilter &&
              diaqnosFilter
            );
          });
          setFilteredData(filteredData);
          setLoading(false);
        }, 400);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    filterData();
  }, [language, prefered, depart, ill, treat, diaqnos]);

  return (
    <div>
      <FilterAreas
        language={language}
        setLanguage={setLanguage}
        prefered={prefered}
        setPrefered={setPrefered}
        nationalits={nationalits}
        setNationalits={setNationalits}
        depart={depart}
        setDepart={setDepart}
        ill={ill}
        setIll={setIll}
        treat={treat}
        settreat={settreat}
        diaqnos={diaqnos}
        setDiaqnos={setDiaqnos}
      />
      <FilterTable data={filteredData} loading={loading} />
    </div>
  );
};

export default Lead;
