# battleShip

### Welcome to battleShip, let's play!

## To Install

- Fork or clone from GitHub

```
npm install
```

## Run Tests

- Tests will run through each scenario, i.e. miss, hit, etc.

```
npm run test
```


#### Additional Time:

- Considerations I would have made with additional time, include:
	- Verify fire() inputs, coordinates are within matrix, coordinates are not duplicate "shots", etc.
	- Split board and ships into separate respective classes
	- Board class would have exposed methods, i.e. "fire","hit", etc.
		- Build board, testing valid placement of ships, i.e. not overlapping or off board.
	- Ship class would have tracked their respective statuses, i.e. location, hits, sank, etc.


```
/** Example Ship Class **/
const Ship = () => {
	const shipType = {
		size: 4,
		name: 'destroyer'
	}

	const hitCount = 0
	const hit = () => hitCount++
	const sunk = () => {
		hitCount === shipType.size
	}

	return {hit, sunk, shipType}
}

export default Ship
```

### Ship Methods Called on Board (**Unverified psuedo-code**)

```
/** Example Board Class Calling on Ship Methods **/
import Ship from './ship'

const GameBoard = () => {
	const fire = (x, y) => {
	[loop through matrix...]
		if (x === row && y === col){
			Ship.hit()
		}
	}
}
```
