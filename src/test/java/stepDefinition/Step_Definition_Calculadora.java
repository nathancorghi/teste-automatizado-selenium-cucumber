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
import cucumber.api.java.pt.E;
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
	
	@Dado("que acessei a aplicação")
	public void Acessei_aplicacao()
	{
		driver.navigate().to("https://calculadoratriangulo.herokuapp.com/");
		driver.manage().window().maximize();
	}
	
	@Quando("eu não informar os valores dos lados")
	public void Nao_informar_valores_dos_lados()
	{
	}
	
	@Quando("eu informar os valores do lado1 (.*), lado2 (.*) e lado3 (.*)")
	public void Informar_valores_dos_lados(int lado1, int lado2, int lado3)
	{
		calculadora.lado1(lado1);
		calculadora.lado2(lado2);
		calculadora.lado3(lado3);		
	}
	
	@E("calcular os lados do triângulo")
	public void Calcular_lados_triangulo()
	{
		calculadora.calcular();		
	}
	
	@Entao("a mensagem \"Preencha todos os lados\" será exibida")
	public void Mensagem_erro_sera_exibida()
	{
		String mensagem = "Preencha todos os lados";
		assertEquals(driver.findElement(By.id("message")).getText(), mensagem.replace("\"", ""));
	}
	
	@Entao("o (.*) será calculado")
	public void Triangulo_isosceles_sera_calculado(String nome)
	{
		assertEquals(driver.findElement(By.id("message")).getText(), nome.replace("\"", ""));
	}
}
