import { Link, useLoaderData } from 'react-router';

const AppsShow = () => {
    const apps = useLoaderData();

    const trendingApps = apps.filter(app => app.promotion).sort((a, b) => b.rating - a.rating);
    const categories = [...new Set(apps.map(app => app.category))];

    return (
        <div className="p-4 space-y-8 mx-auto max-w-11/12">

            
            <div>
                <h2 className="text-2xl font-bold text-orange-600 mb-3">🔥 Trending Apps</h2>
                <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                    {trendingApps.map(app => (
                        <Link key={app.id} to={`appDetails/${app.id}`}>
                            <div className="min-w-[140px] max-w-[160px] bg-white rounded-xl border border-gray-200 shadow-sm p-2 hover:shadow-md transition duration-200">
                                <img
                                    src={app.thumbnail}
                                    alt={app.name}
                                    className="w-full h-24 object-cover rounded-md"
                                />
                                <h3 className="text-sm font-semibold mt-2 text-gray-800 truncate">{app.name}</h3>
                                <p className="text-xs text-gray-500 truncate">{app.developer}</p>
                                <div className="flex items-center gap-1 text-xs text-orange-500 font-medium mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 .587l3.668 7.568L24 9.423l-6 5.857 1.417 8.253L12 18.896 4.583 23.533 6 15.28 0 9.423l8.332-1.268z" />
                                    </svg>
                                    {app.rating}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

          
            {categories.map(category => {
                const categoryApps = apps
                    .filter(app => app.category === category)
                    .sort((a, b) => b.rating - a.rating);

                return (
                    <div key={category}>
                        <h2 className="text-xl font-bold text-gray-800 mb-3">{category}</h2>
                        <div className="relative">
                            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide scroll-smooth -mx-4 px-4">
                                {categoryApps.map(app => (
                                    <Link key={app.id} to={`appDetails/${app.id}`}>
                                        <div className="min-w-[140px] max-w-[160px] bg-white rounded-xl border border-gray-200 shadow-sm p-2 hover:shadow-md transition duration-200">
                                            <img
                                                src={app.thumbnail}
                                                alt={app.name}
                                                className="w-full h-24 object-cover rounded-md"
                                            />
                                            <h3 className="text-sm font-semibold mt-2 text-gray-800 truncate">{app.name}</h3>
                                            <p className="text-xs text-gray-500 truncate">{app.developer}</p>
                                            <div className="flex items-center gap-1 text-xs text-orange-500 font-medium mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.857 1.417 8.253L12 18.896 4.583 23.533 6 15.28 0 9.423l8.332-1.268z" />
                                                </svg>
                                                {app.rating}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AppsShow;
