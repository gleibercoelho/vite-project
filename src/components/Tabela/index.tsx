import { DataGrid, GridColDef, GridValueGetterParams, GridToolbar} from "@mui/x-data-grid";
import { TabelaDiv } from "./style";
import { CaretRight } from "@phosphor-icons/react";
import { height } from "@mui/system";
/* import { useDemoData } from '@mui/x-data-grid-generator'; */



const columns: GridColDef[]= [
    {field: "dataVenda", headerName: "Data de Venda", maxWidth: 250 },
    {field: "produtoName", headerName: "Produto", maxWidth: 250 },
    {field: "vendendorName", headerName: "Vendendor", maxWidth: 250 },
    {field: "valor", headerName: "Valor", maxWidth: 250 },
    {field: "formaPagamento", headerName: "Forma de pagamento", maxWidth: 250 },
    
    
   
]

const rows = [
    {id: 1, dataVenda: "14/03/2023", produtoName: "Carburador", vendendorName: "Gleiber Coelho", valor: "R$ 150;00", formaPagamento: "Crédito" },
    {id: 3, dataVenda: '14/03/2023', produtoName: "Carburador", vendendorName: "Gleiber Coelho", valor: "R$ 150;00", formaPagamento: "Crédito" },
    {id: 2, dataVenda: '14/03/2023', produtoName: "Carburador", vendendorName: "Gleiber Coelho", valor: "R$ 150;00", formaPagamento: "Crédito" },
    {id: 4, dataVenda: '14/03/2023', produtoName: "Carburador", vendendorName: "Gleiber Coelho", valor: "R$ 150;00", formaPagamento: "Crédito" },
    {id: 5, dataVenda: '14/03/2023', produtoName: "Carburador", vendendorName: "Gleiber Coelho", valor: "R$ 150;00", formaPagamento: "Crédito" },
    {id: 6, dataVenda: '14/03/2023', produtoName: "Carburador", vendendorName: "Gleiber Coelho", valor: "R$ 150;00", formaPagamento: "Crédito" },
    {id: 7, dataVenda: '14/03/2023', produtoName: "Carburador", vendendorName: "Gleiber Coelho", valor: "R$ 150;00", formaPagamento: "Crédito" },
    {id: 8, dataVenda: '14/03/2023', produtoName: "Carburador", vendendorName: "Gleiber Coelho", valor: "R$ 150;00", formaPagamento: "Crédito" },
    {id: 9, dataVenda: '14/03/2023', produtoName: "Carburador", vendendorName: "Gleiber Coelho", valor: "R$ 150;00", formaPagamento: "Crédito" },
    {id: 10, dataVenda: '14/03/2023', produtoName: "Carburador", vendendorName: "Gleiber Coelho", valor: "R$ 150;00", formaPagamento: "Crédito" },
    {id: 11, dataVenda: '14/03/2023', produtoName: "Carburador", vendendorName: "Gleiber Coelho", valor: "R$ 150;00", formaPagamento: "Crédito" },
    {id: 12, dataVenda: '14/03/2023', produtoName: "Carburador", vendendorName: "Gleiber Coelho", valor: "R$ 150;00", formaPagamento: "Crédito" },
    {id: 13, dataVenda: '14/03/2023', produtoName: "Carburador", vendendorName: "Gleiber Coelho", valor: "R$ 150;00", formaPagamento: "Crédito" },
]

/* export default function ToolbarGrid() {
    const { data } = useDemoData({
      dataSet: 'Commodity',
      rowLength: 13,
      maxColumns: 6,
      
    });
} */

export function Tabela() {
    return ( 
    <TabelaDiv>
        <table style={{height: 560, width: 1760, margin: 'auto'}}>
            <DataGrid rows={rows}
                columns={columns}                
                rowCount={13} 
                initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 5
                      },
                    },
                  }}
                  pageSizeOptions={[5]}
                 
                 /> 
                
          
        </table>
    </TabelaDiv>
    )
}

