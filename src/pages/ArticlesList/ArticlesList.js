import React, { PureComponent } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(id, title, text) {
    return { id, title, text };
}

const rows = [
    createData(1,'Frozen yoghurt', 159),
    createData(2,'Ice cream sandwich', 237),
    createData(3,'Eclair', 262),
    createData(4,'Cupcake', 305),
    createData(5,'Gingerbread', 356),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default class ArticlesList extends PureComponent {
    render() {
        const {history, loading, loadArticles} = this.props;

        const routeChange = (id) => {
            let path = `/articles/${id}`;
            history.push(path);
        }

        const classes = useStyles;

        return (
            <>
                {!loading &&
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Название</StyledTableCell>
                                <StyledTableCell align="left">Текст статьи</StyledTableCell>
                                <StyledTableCell align="right">Редактировать</StyledTableCell>
                                <StyledTableCell align="right">Удалить</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.title}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.text}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <button className="au-btn au-btn--block au-btn--green m-b-20"
                                                type="button"
                                                onClick={() => routeChange(row.id)}>Добавить
                                        </button>
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <button className="au-btn au-btn--block au-btn--green m-b-20"
                                                type="submit">Удалить
                                        </button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                }
            </>
        );
    }
}
