//Arrange
aleatorio=(Math.floor(Math.random()*(37*5)))+(37*5)

//Act
resultado=aleatorio%37
//Assert
test('El Valor aleatorio generado despues de hacer las vueltas', () => {
    expect(resultado).toBeGreaterThanOrEqual(0);
    expect(resultado).toBeLessThanOrEqual(36);
  });