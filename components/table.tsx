import {FC} from 'react'

export const Table: FC<{className?: string | ''}> = ({className}) => {
  const rows = [
    {jahr: '2020', ankunft: '15. März & 05. April', junge: '4 Junge, davon 2 gestorben', abflug: '15. August'},
    {jahr: '2021', ankunft: '26. Februar', junge: '2 Junge', abflug: '23. August'},
    {jahr: '2022', ankunft: '26. Februar & 13. März', junge: '5 Junge, davon 1 abgestoßen', abflug: '20. August'},
    {jahr: '2023', ankunft: '05. & 16. März', junge: '', abflug: ''}
  ]

  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-lg shadow-stone-500/10 w-full ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="font-semibold">
            <tr className="bg-stone-50 border-b border-stone-200">
              <td className="py-3 pl-6">Jahr</td>
              <td className="py-3 pl-6">Ankunft</td>
              <td className="py-3 pl-6">Junge</td>
              <td className="py-3 px-6">Abflug</td>
            </tr>
          </thead>
          <tbody>
            {rows.map(({jahr, ankunft, junge, abflug}, index) => (
              <tr key={index} className="border-b border-stone-200">
                <td className="py-3 pl-6 whitespace-nowrap lg:whitespace-normal">{jahr}</td>
                <td className="py-3 pl-6 whitespace-nowrap lg:whitespace-normal">{ankunft}</td>
                <td className="py-3 pl-6 whitespace-nowrap lg:whitespace-normal">{junge}</td>
                <td className="py-3 px-6 whitespace-nowrap">{abflug}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
