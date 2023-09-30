import { useState, useEffect } from "react"
import './App.css'
import './modal.css'

//bài thực hành số 4
const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showHideClassName = isOpen ? 'modal d-block' : 'modal d-none';

  const modal = (
    <div className={showHideClassName}>
      <div className="modal-container">
        <h2>this is modal</h2>
        <div className="form-group">
          <label> Hello</label>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} type="button">close</button>
      </div>
    </div>
  )
  return { isOpen, setIsOpen, modal };
}

function App() {

  // thực hành 1
  const [age, setAge] = useState(20)
  const [name1, setName1] = useState('hello')
  const onChangeAge = () => {
    setAge(age + 1);
  }
  const onChangeName = () => {
    setName1('nguyen')
  }
  // --------------------------------------------

  //thực hành 2
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
  }, []);
  const Loading = () => {
    return (
      <div className="loader"></div>
    );
  };
  // ---------------------------------------------

  //thực hành 3
  const [name2, setName2] = useState();
  const [price, setPrice] = useState();
  const [products, setProducts] = useState([]);

  const onAddProduct = () => {
    setProducts([...products, { name2, price: Number(price) }]);
  }
  const total = products.reduce((acc, ele) => acc + ele.price, 0);
  //---------------------------------------------------------------

  // thực hành 4
  const { modal, isOpen, setIsOpen } = useModal();
  const onOpenModal = () => setIsOpen(true);
  //------------------------------------------------------

  // bài tập 1
  const [number1, setNumber1] = useState(5);
  const [number2, setNumber2] = useState(6);
  const [sum, setSum] = useState();
  const [multi, setMulti] = useState();
  const handleClickSum = () => {
    setSum(number1 + number2);
  }
  const handleClickMulti = () => {
    setMulti(number1 * number2);
  }
  //----------------------------------------------

  // bài tập 2
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      showTime();
    }, 2000)
  }, [time]);

  const showTime = () => {
    setTime(time + 1)
    if (time >= 5) {
      setTime((time === 0) + 1 )
      alert(`bây giờ là: ${time} giờ`)
    } else {
      alert(`bây giờ là: ${time} giờ`)
    }
  }
//---------------------------------------

  return (
    <div className='container1'>

      {/* bài thực hành só 1 */}
      <div className="age">
        <div>xin chào : {name1}</div>
        <div>tuổi là : {age}</div>
        <button onClick={onChangeAge}> tăng tuổi lên 1 </button>
        <button onClick={onChangeName}>hiển thị tên</button>
      </div>

      {/* bài thực hành số 2 */}
      <div>
        <div className='loading'>
          {isLoading && <Loading />}
        </div>
      </div>

      {/* bài thực hành số 3 */}
      <div className="product">
        <input type="text" placeholder="enter name" value={name2} onChange={e => setName2(e.target.value)} />
        <br />
        <input type="text" placeholder="enter price" value={price} onChange={e => setPrice(e.target.value)} />
        <br />
        <button onClick={onAddProduct}>add product</button>
        <div>total: {total}</div>
        <ul>
          {products.map((e, i) => <li key={i}>{e.name2} - {e.price}</li>)}
        </ul>
      </div>

      {/* bài thực hành số 4 */}
      <div className='container'>
        <div>Welcome to modal</div>
        <button onClick={onOpenModal}>Open modal</button>
        {modal}
      </div>

      {/* bài tập 1 */}
      <div>
        number1: {number1}
        <br />
        number2: {number2}
        <br />
        <button onClick={handleClickSum}>tính tổng 2 số</button>
        <p>tổng 2 số: {sum}</p>
        <button onClick={handleClickMulti}>tính tích 2 số</button>
        <p>tích 2 số: {multi}</p>
      </div>

    </div>
  )
}

export default App
