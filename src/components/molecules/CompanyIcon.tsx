type CompanyIconProps = {
    width?: number;
    height?: number;
};

const CompanyIcon = ({ height = 50, width = 50 }: CompanyIconProps) => {
    return (
        <div className='flex gap-4 items-center '>
            <img
                className='dark:hidden'
                src='/images/logo/logo.svg'
                alt='Logo'
                width={width}
                height={height}
            />
            <img
                className='hidden dark:block'
                src='/images/logo/logo-dark.svg'
                alt='Logo'
                width={width}
                height={height}
            />
        </div>
    );
};

export default CompanyIcon;
