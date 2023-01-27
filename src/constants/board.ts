import { IResult } from './../models/resultModel';

const initialBoardState: string[] = ['', '', '', '', '', '', '', '', ''];
const initialResultState: IResult = { winner: 'none', result: 'none' };
const boardCells: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

export { initialBoardState, initialResultState, boardCells };
