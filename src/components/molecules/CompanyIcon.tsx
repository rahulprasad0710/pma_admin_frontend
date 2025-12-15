type CompanyIconProps = {
    withName?: boolean;
};

const CompanyIcon = ({ withName = true }: CompanyIconProps) => {
    return (
        <div className='flex gap-4 items-center '>
            <img
                className='dark:hidden'
                src='/images/logo/logo.svg'
                alt='Logo'
                width={50}
                height={50}
            />
            <img
                className='hidden dark:block'
                src='/images/logo/logo-dark.svg'
                alt='Logo'
                width={50}
                height={50}
            />
            {withName}
        </div>
    );
};

export default CompanyIcon;
