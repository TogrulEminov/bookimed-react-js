import { useEffect, useState } from 'react';
import Selector from '../../Components/Selector';
import languages from '../../resources/languages.json';
import countries from '../../resources/preferedcountries.json';
import nationalites from '../../resources/Natuanlity.json';
import departments from '../../resources/departments.json';
import MultiSelect from '../../Components/MultiSelect';
import ilnesses from '../../resources/ilnesses.json';
import treatments from '../../resources/treatments.json';
import diaqnostics from '../../resources/diognostic.json';
const FilterAreas = ({
  language,
  setLanguage,
  prefered,
  setPrefered,
  nationalits,
  setNationalits,
  depart,
  setDepart,
  ill,
  setIll,
  treat,
  settreat,
  diaqnos,
  setDiaqnos,
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (
      language.length > 0 ||
      prefered.length >= 1 ||
      nationalits.length >= 1 ||
      depart.length >= 1 ||
      ill.length >= 1 ||
      treat.length >= 1 ||
      diaqnos.length >= 1
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [language, prefered, nationalits, depart, ill, treat, diaqnos]);
  const handleReset = () => {
    setDiaqnos('');
    setIll('');
    setActive(false);
    setNationalits('');
    settreat('');
    setDepart('');
    setLanguage('');
    setPrefered('');
  };
  return (
    <div className="w-full bg-white shadow-xl p-5 md:p-10">
      <div className="row gap-y-6">
        <div className="md:col-md-6 lg:col-lg-4 xl:col-xl-3">
          <Selector
            selected={language}
            setSelected={setLanguage}
            data={languages}
            title="Languages"
            placeholder={'Search your language'}
          />
        </div>
        <div className="md:col-md-6 lg:col-lg-4 xl:col-xl-3">
          <MultiSelect
            data={countries}
            placeholder="Search country"
            selected={prefered}
            title={'Prefered countries'}
            setSelected={setPrefered}
          />
        </div>
        <div className="md:col-md-6 lg:col-lg-4 xl:col-xl-3">
          <MultiSelect
            data={nationalites}
            placeholder="Search nationalites"
            selected={nationalits}
            title={'Your nationalites'}
            setSelected={setNationalits}
          />
        </div>
        <div className="md:col-md-6 lg:col-lg-4 xl:col-xl-3">
          <MultiSelect
            data={departments}
            placeholder="Search departments"
            selected={depart}
            title={'Your departments'}
            setSelected={setDepart}
          />
        </div>
        <div className="md:col-md-6 lg:col-lg-4 xl:col-xl-3">
          <MultiSelect
            data={ilnesses}
            placeholder="Search ilnesses"
            selected={ill}
            title={'Your ilnesses'}
            setSelected={setIll}
          />
        </div>
        <div className="md:col-md-6 lg:col-lg-4 xl:col-xl-3">
          <MultiSelect
            data={treatments}
            placeholder="Search treatments"
            selected={treat}
            title={'Your treatments'}
            setSelected={settreat}
          />
        </div>
        <div className="md:col-md-6 lg:col-lg-4 xl:col-xl-3">
          <MultiSelect
            data={diaqnostics}
            placeholder="Search diaqnostics"
            selected={diaqnos}
            title={'Your diaqnos'}
            setSelected={setDiaqnos}
          />
        </div>
        {active && (
          <div className="md:col-md-6 lg:col-lg-4 xl:col-xl-3">
            <button
              onClick={handleReset}
              className="border-2 border-[#15803d]  text-[#15803d] rounded-2xl p-1.5 px-5">
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterAreas;
