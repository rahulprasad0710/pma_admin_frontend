const CompanyIcon = () => {
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
            <h2 className='text-3xl font-semibold text-brand-500'>PMA</h2>
        </div>
    );
};

export default CompanyIcon;
