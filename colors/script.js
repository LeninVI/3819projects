let size = prompt("Choice field size", 3);
let table = document.getElementById('field');
let colors = ['red', 'green', 'blue'];
let cellsColor = [];
let stepCount = 0;

for (let i = 0; i < size; i++)//стандартный цикл на перебор всех элементов матрицы
{
	let tr = document.createElement('tr');
	for (let j = 0; j < size; j++)
	{
		let td = document.createElement('td');
		td.classList.add(colors[Math.floor(Math.random() * Math.floor(colors.length))])|//задать случайный цвет ячейке
		td.addEventListener("click", step)
		tr.appendChild(td);
	}
	table.appendChild(tr);
}

function step() 
{
	stepCount += 1;
	let color = colors.indexOf(this.classList.item(0))//получить класс ячейки
	if (color == colors.length-1) this.classList.add(colors[0]) //если достигает последнего класса в списке, то присуждается первый класс в списке, для повторения цветовой гаммы
	else this.classList.add(colors[color+1])//если нет, то следующий класс
	this.classList.remove(colors[color])		//удлаение старого класса
	if (isVictory(cells)) 
	{
		alert("Победа, количество шагов: "+ stepCount);//условие победы+рестарт страницы
		window.location.reload();
	}
}


function isVictory(cells) //функция на победу
{
	cellsColor = [];
	for (let cell of cells) cellsColor.push(cell.classList.item(0));//классы всех элементов внутрь массива
	for (let i = 0; i < cellsColor.length; i++) 
	{
        while(cellsColor[i] != cellsColor[0]) return false; //если все классы одинаковые, то победа, если нет, то игра продолжается
    }
	return true;
}

let cells = document.querySelectorAll('td');//все ячейки в переменную cells