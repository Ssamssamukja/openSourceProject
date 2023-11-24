package opensource.example.subject.loader;

import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;
import opensource.example.subject.model.Activity;
import opensource.example.subject.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.List;

@Component
public class CsvDataLoader implements CommandLineRunner {

    @Autowired
    private ActivityRepository activityRepository;

    @Override
    public void run(String... args) throws Exception {
        BufferedReader reader = new BufferedReader(
                new InputStreamReader(new ClassPathResource("data/dataset.csv").getInputStream()));

        CsvToBean<Activity> csvToBean = new CsvToBeanBuilder<Activity>(reader)
                .withType(Activity.class)
                .withIgnoreLeadingWhiteSpace(true)
                .build();

        List<Activity> activities = csvToBean.parse();
        activityRepository.saveAll(activities);
    }
}

