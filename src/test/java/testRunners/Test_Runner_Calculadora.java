package testRunners;
import org.junit.runner.RunWith;

@RunWith(cucumber.api.junit.Cucumber.class)
@cucumber.api.CucumberOptions(features="src/test/resources/feature", glue = "stepDefinition")
public class Test_Runner_Calculadora {
	
}
