import { useState, } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [value, setValue] = useState()
  const [availableForSale, setAvailableForSale] = useState('Sim')
  const [productList, setProductList] = useState([])

  const handleDescriptionChange = (inputChange) => {
    setDescricao(inputChange.target.value)
  }
  const handleNameChange = (inputData) => {
    setNome(inputData.target.value)
  }
  const handleValueChange = (inputData) => {
    setValue(inputData.target.value)
  }
  const handleForSale = (inputData) => {
    setAvailableForSale(inputData.target.value)
  }
  const saveProduct = () => {
    setProductList([...productList, { nome: nome, descricao: descricao, value: value, availableForSale: availableForSale }])
    setNome('')
    setDescricao('')
    setValue(0)
    setAvailableForSale('Sim')
  }
  console.log(productList)

  const removeProduct = (selectProduct) => {
    const updatedList = productList.filter((product, index) => index !== selectProduct)
    setProductList(updatedList)
  }

  return (
    <>
      <div class='formConteiner'>
        <input type='text' value={nome} onChange={handleNameChange} name="nome" placeholder='Nome Do Produto'></input>
        <input type='text' value={descricao} onChange={handleDescriptionChange} name="descricao" placeholder='Descrição Do Produto'></input>
        <input type='number' value={value} onChange={handleValueChange} name="valor" placeholder='Valor Do Produto'></input>
        <select onChange={handleForSale} value={availableForSale}>
          <option>
            Sim
          </option>
          <option>
            Não
          </option>
        </select>
        <button className='button'
          onClick={saveProduct} >
          Salvar
        </button>
      </div>

      <div className='tabbleConteiner'>
        <table>
          <thead>
            <th>
              Nome
            </th>
            <th>
              Descrição
            </th>
            <th>
              Valor
            </th>
            <th>
              Disponível para venda
            </th>
            <th>
              Deletar
            </th>
          </thead>

          {productList.sort((produtoAtual, produtoAtualB) => produtoAtual.value - produtoAtualB.value)
            .map((produtoAtual, index) => {
              return (<tbody>
                <td>
                  {produtoAtual.nome}
                </td>
                <td>
                  {produtoAtual.descricao}
                </td>
                <td>
                  {produtoAtual.value}
                </td>
                <td>
                  {produtoAtual.availableForSale}
                </td>
                <td>
                  <button className='buttonDelet' onClick={() => removeProduct(index)}>
                    X
                  </button>
                </td>
              </tbody>)
            })}
        </table>
      </div>
    </>
  )
}

export default App
