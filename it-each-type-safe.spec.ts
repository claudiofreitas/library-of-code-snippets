const sum = (addend1: number, addend2: number): number => {
	return addend1 + addend2
}

describe('sum', () => {
	type TestCase = {
		description: string
		addend1: number
		addend2: number
		expectedResult: number
	}

	test.each<TestCase>([
		{
			description: 'simple description',
			addend1: 2,
			addend2: 3,
			expectedResult: 5,
		},
	])('scenario $#: $description', ({ addend1, addend2, expectedResult }) => {
		const actualResult = sum(addend1, addend2)

		expect(actualResult).toStrictEqual(expectedResult)
	})
})
