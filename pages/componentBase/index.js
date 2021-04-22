
function ComponentBase() {
  return <Hero {...heroData} />;
}

export default ComponentBase;

function Hero(props) {
  const {
    h1,
    prodajbi,
    naemi,
    placeholderNaselen,
    placeholderKategori,
    iconKategoriq,
    placeholderCena,
    iconCena,
    text_Label,
    moreSearch,
    placeholderJilishtn,
    placeholder,
    placeholder2,
    placeholder3,
    icon,
    placeholderVijOsht,
  } = props;

  return (
    <div className="hero">
      <h1 className="h1 ubuntu-normal-deep-space-sparkle-66px">{h1}</h1>
      <div className="section">
        <div className="flex-row-2">
          <div className="prodajbi valign-text-middle ubuntu-bold-river-bed-12px">{prodajbi}</div>
          <div className="naemi ubuntu-normal-river-bed-12px">{naemi}</div>
        </div>
        <div className="flex-row">
          <div className="naseleno-mqsto">
            <div className="overlap-group7">
              <div className="placeholder-naselen ubuntu-normal-tiara-14px">{placeholderNaselen}</div>
            </div>
          </div>
          <div className="category-field">
            <div className="overlap-group6">
              <div className="placeholder-kategori ubuntu-normal-tiara-14px">{placeholderKategori}</div>
              <img className="icon-kategoriq" src={iconKategoriq} />
            </div>
          </div>
          <div className="field-cena">
            <div className="overlap-group5">
              <div className="placeholder-cena ubuntu-normal-tiara-14px">{placeholderCena}</div>
              <img className="icon-cena" src={iconCena} />
            </div>
          </div>
          <div className="button">
            <div className="overlap-group4">
              <div className="textlabel ubuntu-normal-white-12px">{text_Label}</div>
            </div>
          </div>
        </div>
        <div className="more-search valign-text-middle ubuntu-light-river-bed-12px">{moreSearch}</div>
        <div className="flex-row-1">
          <div className="tag-1">
            <div className="overlap-group3">
              <div className="placeholder-jilishtn ubuntu-normal-river-bed-12px">{placeholderJilishtn}</div>
            </div>
          </div>
          <div className="tag-">
            <div className="overlap-group2">
              <div className="placeholder-2 ubuntu-normal-river-bed-12px">{placeholder}</div>
            </div>
          </div>
          <div className="tag-">
            <div className="overlap-group1">
              <div className="placeholder ubuntu-normal-river-bed-12px">{placeholder2}</div>
            </div>
          </div>
          <div className="tag-">
            <div className="overlap-group">
              <div className="placeholder-1 ubuntu-normal-river-bed-12px">{placeholder3}</div>
            </div>
          </div>
        </div>
        <div className="icon-vij-oshte">
          <img className="icon" src={icon} />
          <div className="placeholder-vij-osht lato-normal-celeste-12px">{placeholderVijOsht}</div>
        </div>
      </div>
    </div>
  );
}

const heroData = {
    h1: "Намери своя мечтан имот още днес",
    prodajbi: "ПРОДАЖБИ",
    naemi: "НАЕМИ",
    placeholderNaselen: "Населено място...",
    placeholderKategori: "Категория",
    iconKategoriq: "https://anima-uploads.s3.amazonaws.com/projects/6076ea6fe8a3cd8478d1dcfa/releases/607c0699a68d55c181607739/img/icon-cena@2x.svg",
    placeholderCena: "Цена",
    iconCena: "https://anima-uploads.s3.amazonaws.com/projects/6076ea6fe8a3cd8478d1dcfa/releases/607c0699a68d55c181607739/img/icon-cena@2x.svg",
    text_Label: "ТЪРСИ",
    moreSearch: "Разшиерено търсене",
    placeholderJilishtn: "ЖИЛИЩНИ",
    placeholder: "ТЪРГОВСКИ",
    placeholder2: "НОВО СТРОИТЕЛСТВО",
    placeholder3: "КРЕДИТИ",
    icon: "https://anima-uploads.s3.amazonaws.com/projects/6076ea6fe8a3cd8478d1dcfa/releases/607c0699a68d55c181607739/img/icon@2x.svg",
    placeholderVijOsht: "Виж още",
};

