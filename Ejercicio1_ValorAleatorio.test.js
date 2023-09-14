//Arrange
CanMin = 5;

//Act
ValorRnd=(Math.random()*37*5)+37*5
//Assert
test('El Valor aleatorio generado despues de hacer las vueltas', () => {
    expect(ValorRnd).toBeGreaterThanOrEqual(37*5);
    expect(ValorRnd).toBeLessThanOrEqual(37*10);
  });