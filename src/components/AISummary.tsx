type BookingSummaryProps = {
    summary: string | null;
};

export function BookingSummary({ summary }: BookingSummaryProps) {
    if (!summary) {
        return (
            <div className='text-sm text-gray-500'>
                AI summary not available
            </div>
        );
    }

    const lines = summary.split("\n");

    return (
        <div className='rounded-lg border bg-white p-4 space-y-2'>
            {lines.map((line, index) => {
                // Section headers
                if (line.trim().endsWith(":")) {
                    return (
                        <h3
                            key={index}
                            className='mt-4 font-semibold text-gray-900'
                        >
                            {line}
                        </h3>
                    );
                }

                // Bullet points
                if (line.trim().startsWith("-")) {
                    return (
                        <p key={index} className='pl-4 text-sm text-gray-700'>
                            {line}
                        </p>
                    );
                }

                // Empty lines
                if (!line.trim()) {
                    return <div key={index} />;
                }

                // Fallback text
                return (
                    <p key={index} className='text-sm text-gray-700'>
                        {line}
                    </p>
                );
            })}
        </div>
    );
}
