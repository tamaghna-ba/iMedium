import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { AuthorModel } from '../models/Author.model';


interface StatisticsTableProps {
    author: AuthorModel
}

class Row {
    constructor(
        public readonly name: string,
        public readonly total: number,
        public readonly perPost: number,
        public readonly perFollower: number,
    ) {}
}

export function DataStatsComponent({author}: StatisticsTableProps) {
    const rows = [
        new Row(
            'Claps 👏',
            author.totalClaps,
            author.clapsPerPost,
            author.clapsPerFollower
        ),
        new Row(
            'Responses 💬',
            author.totalResponses,
            author.responsesPerPost,
            author.responsesPerFollower
        ),
        new Row(
            'Clappers 👤',
            author.totalClappers,
            author.clappersPerPost,
            author.clappersPerFollower
        ),
    ];


    return (
        <TableContainer>
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={'terimeri'}>Statistics</TableCell>
                        <TableCell className={'terimeri'} align="right">Total</TableCell>
                        <TableCell className={'terimeri'} align="right">Per post</TableCell>
                        <TableCell className={'terimeri'} align="right">Per follower</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            {/*sx={{ '&:last-child td, &:last-child th': { border: 0 } }}*/}
                            <TableCell className={'terimeri'} component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell className={'terimeri'} align="right">{row.total}</TableCell>
                            <TableCell className={'terimeri'} align="right">{row.perPost}</TableCell>
                            <TableCell className={'terimeri'} align="right">{row.perFollower}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
