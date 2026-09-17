import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Customers',
};

export default function Page() {
    return (
        <main>
            <h1 className="mb-4 text-xl md:text-2xl">Customers Page</h1>
            <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <p className="text-gray-600">
                    Welcome to the customers dashboard! This is some random content to populate the page for now. 
                    Eventually, this will display a list of all your awesome clients and their related metrics.
                </p>
            </div>
        </main>
    );
}