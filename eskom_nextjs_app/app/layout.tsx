import '../styles/globals.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: 'Eskom Forecasting Dashboard',
  description: 'Eskom Energy Demand and Supply Forecasting Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>



            <Sidebar />
       
            <main className='bg-gray-100 min-h-screen ml-20'>
              
              <Header />
              {children}
            </main>

  

      </body>
    </html>
  )
}
