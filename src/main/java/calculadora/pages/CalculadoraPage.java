package calculadora.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class CalculadoraPage {
	private WebDriver driver;
	
	public CalculadoraPage(WebDriver driver)
	{
		this.driver = driver;
	}
	
	public void lado1(int lado1) {
		driver.findElement(By.id("lado1")).sendKeys(String.valueOf(lado1));
	}
	
	public void lado2(int lado2) {
		driver.findElement(By.id("lado2")).sendKeys(String.valueOf(lado2));
	}
	
	public void lado3(int lado3) {
		driver.findElement(By.id("lado3")).sendKeys(String.valueOf(lado3));
	}
	
	public void calcular() {
		driver.findElement(By.id("calcular")).click();
	}
}
