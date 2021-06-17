import { Table } from 'react-bootstrap'
import October2020Paper1 from './Paper 1 - October 2020.pdf'
import October2020Paper2 from '../past-papers/A-Level/Edexcel/Paper 2/Paper 2 - October 2020.pdf'
import October2020Paper3Statistics from '../past-papers/A-Level/Edexcel/Paper 3/Paper 3 - October 2020 - Statistics.pdf'
import October2020Paper3Mechanics from '../past-papers/A-Level/Edexcel/Paper 3/Paper 3 - October 2020 - Mechanics.pdf'
import October2020Paper1MarkScheme from '../past-papers/A-Level/Edexcel/Paper 1/Paper 1 - October 2020 - Mark Scheme.pdf'
import October2020Paper2MarkScheme from '../past-papers/A-Level/Edexcel/Paper 2/Paper 2 - October 2020 - Mark Scheme.pdf'
import October2020Paper3StatisticsMarkScheme from '../past-papers/A-Level/Edexcel/Paper 3/Paper 3 - October 2020 - Statistics - Mark Scheme.pdf'
import October2020Paper3MechanicsMarkScheme from '../past-papers/A-Level/Edexcel/Paper 3/Paper 3 - October 2020 - Mechanics - Mark Scheme.pdf'
import June2019Paper1 from '../past-papers/A-Level/Edexcel/Paper 1/Paper 1 - June 2019.pdf'
import June2019Paper2 from '../past-papers/A-Level/Edexcel/Paper 2/Paper 2 - June 2019.pdf'
import June2019Paper3Statistics from '../past-papers/A-Level/Edexcel/Paper 3/Paper 3 - June 2019 - Statistics.pdf'
import June2019Paper3Mechanics from '../past-papers/A-Level/Edexcel/Paper 3/Paper 3 - June 2019 - Mechanics.pdf'
import June2019Paper1Solutions from '../past-papers/A-Level/Edexcel/Paper 1/Paper 1 - June 2019 - Solutions.pdf'
import June2019Paper2Solutions from '../past-papers/A-Level/Edexcel/Paper 2/Paper 2 - June 2019 - Solutions.pdf'
import June2018Paper1 from '../past-papers/A-Level/Edexcel/Paper 1/Paper 1 - June 2018.pdf'
import June2018Paper2 from '../past-papers/A-Level/Edexcel/Paper 2/Paper 2 - June 2018.pdf'
import June2018Paper3 from '../past-papers/A-Level/Edexcel/Paper 3/Paper 3 - June 2018.pdf'
import June2018Paper1MarkScheme from '../past-papers/A-Level/Edexcel/Paper 1/Paper 1 - June 2018 - Mark Scheme.pdf'
import June2018Paper2MarkScheme from '../past-papers/A-Level/Edexcel/Paper 2/Paper 2 - June 2018 - Mark Scheme.pdf'
import June2018Paper3MarkScheme from '../past-papers/A-Level/Edexcel/Paper 3/Paper 3 - June 2018 - Mark Scheme.pdf'


export default function A_Level_Past_Papers() {
    return (
        <div>
            <br />
            <h1>Edexcel A Level Papers</h1>
            <br />
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Question Paper</th>
      <th>Mark Schemes or Worked Solutions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a target='_blank' href={October2020Paper1}>October 2020 - Paper 1</a></td>
      <td><a target='_blank' href={October2020Paper1MarkScheme}>Mark Scheme </a></td>
    </tr>
    <tr>
      <td><a target='_blank' href={October2020Paper2}>October 2020 - Paper 2</a></td>
      <td><a target='_blank' href={October2020Paper2MarkScheme}>Mark Scheme </a></td>
    </tr>
    <tr>
      <td><a target='_blank' href={October2020Paper3Statistics}>October 2020 - Paper 3 - Statistics</a></td>
      <td><a target='_blank' href={October2020Paper3StatisticsMarkScheme}>Mark Scheme </a></td>
    </tr>
    <tr>
      <td><a target='_blank' href={October2020Paper3Mechanics}>October 2020 - Paper 3 - Mechanics</a></td>
      <td><a target='_blank' href={October2020Paper3MechanicsMarkScheme}>Mark Scheme </a></td>
    </tr>
    <tr>
        <td><a target='_blank' href={June2019Paper1}>June 2019 - Paper 1</a></td>
        <td><a target='_blank' href={June2019Paper1Solutions}>Worked Solutions</a></td>
    </tr>
    <tr>
        <td><a target='_blank' href={June2019Paper2}>June 2019 - Paper 2</a></td>
        <td><a target='_blank' href={June2019Paper2Solutions}>Worked Solutions</a></td>
    </tr>
    <tr>
        <td><a target='_blank' href={June2019Paper3Statistics}>June 2019 - Paper 3 - Statistics</a></td>
        <td><a target='_blank' href={June2019Paper3Statistics}>Mark Scheme</a></td>
    </tr>
    <tr>
        <td><a target='_blank' href={June2019Paper3Mechanics}>June 2019 - Paper 3 - Mechanics</a></td>
        <td><a target='_blank' href={June2019Paper3Mechanics}>Mark Scheme</a></td>
    </tr>
    <tr>
        <td><a target='_blank' href={June2018Paper1}>June 2018 - Paper 1</a></td>
        <td><a target='_blank' href={June2018Paper1MarkScheme}>Mark Scheme</a></td>
    </tr>
    <tr>
        <td><a target='_blank' href={June2018Paper2}>June 2018 - Paper 2</a></td>
        <td><a target='_blank' href={June2018Paper2MarkScheme}>Mark Scheme</a></td>
    </tr>
    <tr>
        <td><a target='_blank' href={June2018Paper3}>June 2018 - Paper 3</a></td>
        <td><a target='_blank' href={June2018Paper3MarkScheme}>Mark Scheme</a></td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}
