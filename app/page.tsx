import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className=''>
      <section className="py-40 bg-green-400" id="hero">
          <div className='text-center mx-auto w-3/4'>
              <h1 className='text-5xl font-bold'>Бонус Работа</h1>
              <p className='mt-5 text-lg'>Бонус Работа е страница креирана за созадавање капитал и олеснување на секојднвените потреби на луѓето. Може да создадете профил на кој ќе можете да бидете таскер и постер и секоја ваша потреба да биде задоволена.</p>
          </div>
      </section>

        <section className='my-5'>
            <div className='flex justify-between items-start p-7 mx-10 gap-3 border rounded-md'>
                <div>
                    <h5 className='text-4xl font-bold'>500+</h5>
                    <p>Објави неделно</p>
                </div>
                <div>
                    <h5 className='text-4xl font-bold'>5000+</h5>
                    <p>Објави Таскер/Постер</p>
                </div>
                <div>
                    <h5 className='text-4xl font-bold'>1000+</h5>
                    <p>Задоволни клиенти</p>
                </div>
                <div>
                    <h5 className='text-4xl font-bold'>10000</h5>
                    <p>Оценувања</p>
                </div>
            </div>
        </section>
        <section id="info">
            <div className="flex justify-between items-start mx-10 gap-3">
                <div className='p-7 w-1/3 rounded-md border'>
                    <h3 className='text-3xl font-bold'>Што е постер?</h3>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta illo libero magnam mollitia quasi. Autem, dolores, earum exercitationem expedita facere iste, iusto natus nihil numquam odio quod repudiandae rerum tempora!</p>
                </div>
                <div className='p-7 rounded-md border w-1/3'>
                    <h3 className='text-3xl font-bold'>Бенефиции</h3>
                    <Table className='mt-5'>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Бенефит</TableHead>
                                <TableHead>Таскер</TableHead>
                                <TableHead>Постер</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Бенефит 1</TableCell>
                                <TableCell>
                                    <FontAwesomeIcon color='green' icon={faCheck} />
                                </TableCell>
                                <TableCell>
                                    <FontAwesomeIcon color='green' icon={faCheck} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Бенефит 2</TableCell>
                                <TableCell>
                                    <FontAwesomeIcon color='green' icon={faCheck} />
                                </TableCell>
                                <TableCell>
                                    <FontAwesomeIcon color='red' icon={faXmark} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Бенефит 3</TableCell>
                                <TableCell>
                                    <FontAwesomeIcon color='green' icon={faCheck} />
                                </TableCell>
                                <TableCell>
                                    <FontAwesomeIcon color='green' icon={faCheck} />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    {/*<table className='table-auto border-collapse border border-slate-400 w-full'>*/}
                    {/*    <thead>*/}
                    {/*        <tr>*/}
                    {/*            <th>Бенефит 1</th>*/}
                    {/*            <th>Таскер</th>*/}
                    {/*            <th>Постер</th>*/}
                    {/*        </tr>*/}
                    {/*    </thead>*/}
                    {/*    <tbody>*/}
                    {/*        <tr>*/}
                    {/*            <td>Бенефит 1</td>*/}
                    {/*            <td>True</td>*/}
                    {/*            <td>False</td>*/}
                    {/*        </tr>*/}
                    {/*    </tbody>*/}
                    {/*</table>*/}
                </div>
                <div className='p-7 rounded-md border w-1/3'>
                    <h3 className='text-3xl font-bold'>Што е таскер?</h3>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta illo libero magnam mollitia quasi. Autem, dolores, earum exercitationem expedita facere iste, iusto natus nihil numquam odio quod repudiandae rerum tempora!</p>
                </div>
            </div>
        </section>
    </main>
  );
}
