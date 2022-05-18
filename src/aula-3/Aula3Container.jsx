import React from 'react';
import FetchComponent from './components/FetchComponent';

const Aula3Container = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <button className='active'>Fetch API</button>
                    </li>
                </ul>
            </nav>
            <main>
                <FetchComponent />
            </main>
        </div>
    );
};

export default Aula3Container;