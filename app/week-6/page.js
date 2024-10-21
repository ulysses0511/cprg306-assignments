import ItemList from './item-list';

export default function Page(){
    return(
        <main>
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-blue-600">Shopping List</h1>
            </header>
            <ItemList />
        </main>
    )
};