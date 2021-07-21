import styled from 'styled-components'

const IfoLayout = styled.div`
  display: grid;
  grid-gap: 32px;
  padding: 40px 0;
  border-top: 2px solid #1f2327;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 90%;
  margin: 0 auto;
`

export default IfoLayout
