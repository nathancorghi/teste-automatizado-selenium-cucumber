package calculadora.steps;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import calculadora.pages.CalculadoraPage;

public class Calculadora {
	
	public WebDriver driver;
	
	CalculadoraPage calculadora;
	
	@BeforeClass
	public static void setupTest()
	{
		System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver/chromedriver.exe");
		
	}
	
	@Before
	public void before()
	{
		driver = new ChromeDriver();
		calculadora = new CalculadoraPage(driver);
		driver.navigate().to("https://calculadoratriangulo.herokuapp.com/");
		driver.manage().window().maximize();
	}
	
	@Test
	public void Test() throws Exception
	{
		calculadora.lado1(1);
		calculadora.lado2(2);
		calculadora.lado3(3);
		calculadora.calcular();
	}

}
