import React from 'react';
import Counter from './components/Counter';

const Aula2Container = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <button className='active'>Counter</button>
                    </li>
                </ul>
            </nav>
            <main>
                <Counter />
            </main>
        </div>
    );
};

export default Aula2Container;