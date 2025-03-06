import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const Stats = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    return (
        <div className='bg-white p-4 rounded-lg shadow-md w-1/2'>
            <h2 className='text-2xl font-bold mb-4'>Statistics</h2>
            <Bar data={data} />
        </div>
    );
};

export default Stats; 