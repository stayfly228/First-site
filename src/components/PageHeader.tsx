type PageHeaderProps = {
    title: string;
    subtitle?: string;
  };
  
  export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
    return (
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">{title}</h1>
          {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
        </div>
      </header>
    );
  };