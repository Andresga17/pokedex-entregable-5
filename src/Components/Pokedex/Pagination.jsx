import React from 'react'
import './styles/pagination.css'

const Pagination = ({ page, maxPage, setPage }) => {
  
  const pagesPerBlock = 6
  const currentBlock = Math.ceil(page / pagesPerBlock)
  const maxBlock = Math.ceil(maxPage / pagesPerBlock)

  const arrayPages = []
  const initalPage = (currentBlock - 1) * pagesPerBlock + 1
  const finalPage = maxBlock === currentBlock ? maxPage : currentBlock * pagesPerBlock
  
  for(let i = initalPage; i <= finalPage; i++) {
    arrayPages.push(i)
  }
  
  const handlePage = (number) => {
    setPage(number)
  }

  const handleBack = () => {
    if(page - 1 > 0) {
        setPage(page - 1)
    }
  }

  const handleNext = () => {
    if(page + 1 <= maxPage) {
      setPage(page + 1)
    }
  }

  return (
    <div className='pagination'>
        <ul className='pagination__list'>
        <li className='pagination__back page__active' onClick={handleBack}>«</li>
            {
              arrayPages.map(e => (
                <li className={`pagination__number ${page === e && 'page__active'}`} onClick={() => handlePage(e)} key={e}>{e}</li>
              ))
            }
        <div className='pagination__next page__active' onClick={handleNext}>»</div>
        </ul>
    </div>
  )
}

export default Pagination