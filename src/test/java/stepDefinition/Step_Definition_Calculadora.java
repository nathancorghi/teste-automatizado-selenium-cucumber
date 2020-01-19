package stepDefinition;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import calculadora.pages.CalculadoraPage;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class Step_Definition_Calculadora {

public WebDriver driver;
	
	CalculadoraPage calculadora;
	
	@Before
	public void before()
	{
		System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver/chromedriver.exe");		
		driver = new ChromeDriver();
		calculadora = new CalculadoraPage(driver);		
	}
	
	@After
	public void after()
	{
		driver.quit();
	}
	
	@Dado("que acessei a aplicacao")
	public void Acessei_aplicacao()
	{
		driver.navigate().to("https://calculadoratriangulo.herokuapp.com/");
		driver.manage().window().maximize();
	}
	
	@Quando("eu informar os valores do lado1 (.*), lado2 (.*) e lado3 (.*)")
	public void Informar_valores_dos_lados(int lado1, int lado2, int lado3)
	{
		calculadora.lado1(lado1);
		calculadora.lado2(lado2);
		calculadora.lado3(lado3);		
	}
	
	@Entao("o Triangulo (.*) sera calculado")
	public void Triangulo_isosceles_sera_calculado(String nome)
	{
		calculadora.calcular();
		assertEquals(driver.findElement(By.id("message")).getText(), nome.replace("\"", ""));
	}
}
