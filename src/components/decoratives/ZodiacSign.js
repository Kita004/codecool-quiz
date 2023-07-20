import {
  GiAries,
  GiTaurus,
  GiGemini,
  GiCancer,
  GiLeo,
  GiVirgo,
  GiLibra,
  GiScorpio,
  GiSagittarius,
  GiCapricorn,
  GiAquarius,
  GiPisces,
} from "react-icons/gi";

export const ZodiacSign = ({ name }) => {
  const components = {
    Aries: <GiAries />,
    Taurus: <GiTaurus />,
    Gemini: <GiGemini />,
    Cancer: <GiCancer />,
    Leo: <GiLeo />,
    Virgo: <GiVirgo />,
    Libra: <GiLibra />,
    Scorpio: <GiScorpio />,
    Sagittarius: <GiSagittarius />,
    Capricorn: <GiCapricorn />,
    Aquarius: <GiAquarius />,
    Pisces: <GiPisces />,
  };
  return components[name];
};
