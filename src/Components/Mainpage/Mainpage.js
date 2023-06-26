
import './Mainpage.css'

export default function Mainpage(){
    return(
        <div classname='mainpage'>
            <h2>Онлайн калькулятор для расчета 
                декретных выплат и пособий в Казaхстане</h2>
            <p>Онлайн калькулятор декретных является уникальным сервисом в Казахстане и поможет Вам произвести 
                необходимые расчеты декретных пособий и социальныхвыплат, которые будут назначены женщинам в связи с
                рождением ребенка (детей). Все что необходимо знать, чтобы получить расчет, — это среднемесячный 
                доход за последние 1 и 2 года, а с помощью расширенного расчета можно максимально точно вычислить размер декретных.</p>    
        <div className='date-of-birth'>
            <p>Дата рождения ребенка:</p>
            <button className='button-date-of-birth'></button>
        </div>

        <div className='child'>
            <p>Ребенок:</p>
            <button>первый</button>
        </div>

        <div className='place-of-work'>
            <p>Занятость женщины:</p>
            <div className='choise-place-of-work'>
                <button>

                </button>
                <p>Наемный работник</p>
            </div>
            <div className='choise-place-of-work'>
                <button>

                </button>
                <p>ИП</p>
            </div>
            <div className='choise-place-of-work'>
                <button>

                </button>
                <p>Безработная</p>
            </div>
        </div>

        <div className='place-of-work'>
            <p>Условия родов и льготы для женщин:</p>
            <div className='choise-place-of-work'>
                <button>

                </button>
                <p>для нормально протекающих родов</p>
            </div>
            <div className='choise-place-of-work'>
                <button>

                </button>
                <p>в случае осложненных родов или рождения двух или более детей</p>
            </div>
            <div className='choise-place-of-work'>
                <button>

                </button>
                <p>для женщин, проживающих на территориях, подвергшихся воздействию ядерных испытаний, при нормальных родах</p>
            </div>
            <div className='choise-place-of-work'>
                <button>

                </button>
                <p>для женщин, проживающих на территориях, подвергшихся воздействию ядерных испытаний, в случае осложненных родов или при рождении двух и более детей</p>
            </div>
        </div>

        <div className='vacation-time'>
            <p>Количество дней отпуска:</p>
            <button></button>
        </div>

        </div>

    )
}
